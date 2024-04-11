# kobo-toolbox-to-google-sheets
Google Apps script to sends a call to Kobo Toolbox and return data from form submissions to a Google Sheet. Works with the CSV API call from Kobo Toolbox, the URL for which can be constructed using instructions from: https://support.kobotoolbox.org/synchronous_exports.html

This script has a higher performance than the Google Sheets IMPORTDATA() function, and can be set to a scheduler within Google Apps Script.

To add to your Google Sheet, open Extensions > Apps Script and paste into Editor > Code.gs
