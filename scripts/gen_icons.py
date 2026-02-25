import os
from PIL import Image, ImageDraw

def create_icon(size, filename):
    img = Image.new('RGB', (size, size), color=(16, 185, 129)) # Emerald 500
    d = ImageDraw.Draw(img)
    # Draw simple H
    d.rectangle([size*0.3, size*0.2, size*0.4, size*0.8], fill="white")
    d.rectangle([size*0.6, size*0.2, size*0.7, size*0.8], fill="white")
    d.rectangle([size*0.3, size*0.45, size*0.7, size*0.55], fill="white")
    img.save(filename)

public_dir = r"C:\Users\adamb\Documents\01_Projets_Dev\hadiway\public"
os.makedirs(public_dir, exist_ok=True)
create_icon(192, os.path.join(public_dir, "icon-192x192.png"))
create_icon(512, os.path.join(public_dir, "icon-512x512.png"))
print("Icons generated")
