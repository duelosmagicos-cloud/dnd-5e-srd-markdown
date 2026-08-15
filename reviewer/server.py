import http.server
import socketserver
import json
import csv
import urllib.parse
import os

PORT = 8080
CSV_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "../es/spells.csv"))
STATIC_DIR = os.path.dirname(__file__)

FIELDNAMES = ["nombre", "nivel", "tipo", "escuela", "clases", "tiempo_de_lanzamiento", "alcance", "componentes", "duracion", "descripcion", "stage", "revision"]

def read_spells_csv():
    spells = []
    if not os.path.exists(CSV_PATH):
        return spells
    with open(CSV_PATH, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for r in reader:
            spells.append(r)
    return spells

def write_spells_csv(spells):
    with open(CSV_PATH, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(spells)

class SpellHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)

    def do_GET(self):
        parsed_path = urllib.parse.urlparse(self.path)
        if parsed_path.path == "/api/spells":
            spells = read_spells_csv()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(spells, ensure_ascii=False).encode("utf-8"))
        else:
            if parsed_path.path == "/":
                self.path = "/index.html"
            return super().do_GET()

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        if parsed_path.path == "/api/update":
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                target_name = payload.get("nombre")
                new_stage = payload.get("stage")
                new_revision = payload.get("revision")

                spells = read_spells_csv()
                updated = False
                for s in spells:
                    if s["nombre"] == target_name:
                        if new_stage is not None:
                            s["stage"] = new_stage
                        if new_revision is not None:
                            s["revision"] = new_revision
                        updated = True
                        break

                if updated:
                    write_spells_csv(spells)
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "success", "message": f"Spell '{target_name}' updated successfully."}).encode("utf-8"))
                else:
                    self.send_response(404)
                    self.send_header("Content-Type", "application/json; charset=utf-8")
                    self.end_headers()
                    self.wfile.write(json.dumps({"status": "error", "message": "Spell not found"}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode("utf-8"))

        elif parsed_path.path == "/api/batch_update":
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                payload = json.loads(post_data.decode('utf-8'))
                updates = payload.get("updates", [])
                
                spells = read_spells_csv()
                spells_dict = {s["nombre"]: s for s in spells}
                
                count = 0
                for item in updates:
                    tname = item.get("nombre")
                    if tname in spells_dict:
                        if "stage" in item and item["stage"]:
                            spells_dict[tname]["stage"] = item["stage"]
                        if "revision" in item and item["revision"] is not None:
                            spells_dict[tname]["revision"] = item["revision"]
                        count += 1
                
                write_spells_csv(spells)
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success", "updated_count": count}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == "__main__":
    print(f"Starting Spell Reviewer Server at http://localhost:{PORT}")
    print(f"Reading/Writing CSV at: {CSV_PATH}")
    with ReusableTCPServer(("", PORT), SpellHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
