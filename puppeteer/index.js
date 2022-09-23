const fs = require('fs');
const puppeteer = require('puppeteer');

const createPdf = async () => {

    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    const html = fs.readFileSync('sample.html', 'utf-8');
    await page.setContent(html, { waitUntil: 'domcontentloaded' });

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // Downlaod the PDF
    const pdf = await page.pdf({
        path: 'sample.pdf',
        margin: { top: '30px', right: '30px', bottom: '30px', left: '30px' },
        printBackground: true,
        format: 'A4',
    });

    console.log(pdf);

    // Close the browser instance
    await browser.close();
};

const html = `
<!DOCTYPE html>
<html>

<head>
    <title>Test Case PDF</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <style>
        * {
            font-family: 'Roboto', sans-serif;
        }

        html,
        body {
            margin: auto;
        }

        .name {
            font-size: 25px;
            margin: 0px;
        }

        .sectionName {
            font-size: 18px;
            margin: 0px 0px 5px 0;
        }
        table thead tr td {
            font-size: 14px;
            font-weight: 700;
        }
        table tbody tr td {
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div>
        <h1 class="name">Test Cases</h1>
        <hr />
        <div>
            <h3 class="sectionName">1. Section Name</h3>
            <table class="table">
                <thead>
                    <tr>
                        <td scope="col">ID</td>
                        <td scope="col">Title</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Login Form</td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>Forgot Link</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>
`;
fs.writeFile('sample.html', html, createPdf);
