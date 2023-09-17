from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfpage import PDFPage
from io import StringIO

def convert_pdf_to_txt(input_path, output_path):
    rsrcmgr = PDFResourceManager()
    retstr = StringIO()
    laparams = LAParams()
    device = TextConverter(rsrcmgr, retstr, laparams=laparams)
    
    with open(input_path, 'rb') as fp, open(output_path, 'w', encoding='utf-8') as output_file:
        interpreter = PDFPageInterpreter(rsrcmgr, device)
        password = ""
        maxpages = 0
        caching = True
        pagenos = set()

        for page in PDFPage.get_pages(fp, pagenos, maxpages=maxpages, password=password, caching=caching, check_extractable=True):
            interpreter.process_page(page)

        text = retstr.getvalue()
        output_file.write(text)

    device.close()
    retstr.close()

    
convert_pdf_to_txt('/Users/asmikumar/Downloads/Jane Smith Report.pdf', '/Users/asmikumar/Downloads/output.txt')

# Example usage:
# convert_pdf_to_txt('input.pdf', 'output.txt')



#----------------------------------

# # importing required modules
# from PyPDF2 import PdfReader

# # creating a pdf reader object
# reader = PdfReader('/Users/ananyak/HackMIT/reports/Emily Thompson Report.pdf')

# # printing number of pages in pdf file
# print(len(reader.pages))

# # getting a specific page from the pdf file
# page = reader.pages[0]

# # extracting text from page
# text = page.extract_text()
# print(text)


#----------------------------------

# from PyPDF2 import PdfReader

# def pdf_to_text(pdf_path):
#     text = ''
#     pdf_reader = PdfReader(open(pdf_path, 'rb'))

#     for page_num in range(len(pdf_reader.pages)):
#         page = pdf_reader.pages[page_num]
#         text += page.extract_text()

#     return text

# # Specify the path to your PDF file
# pdf_path = '/Users/ananyak/HackMIT/reports/Emily Thompson Report.pdf'  # Replace with the actual path to your PDF

# # Convert the PDF to text
# text_content = pdf_to_text(pdf_path)

# # Save the text content to a text file
# with open('/Users/ananyak/HackMIT/reports/output.txt', 'w', encoding='utf-8') as text_file:
#     text_file.write(text_content)

