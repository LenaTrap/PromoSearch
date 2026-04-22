from pdf2image import convert_from_path

images = convert_from_path("plik.pdf")
print(f'Pobrano {len(images)} obrazów z PDF')