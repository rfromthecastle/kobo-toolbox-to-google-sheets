# Kobo Toolbox to Google Sheets: Google Apps Script
Google Apps script to sends a call to Kobo Toolbox and return data from form submissions to a Google Sheet. Works with the CSV API call from Kobo Toolbox, the URL for which can be constructed using instructions from: https://support.kobotoolbox.org/synchronous_exports.html

This script has a higher performance than the Google Sheets `IMPORTDATA()` function (which can lag if lots of data is imported), and eliminates the need for a paid API connection plugin. The script can also can be set to a scheduler within Google Apps Script to automatically import data at a set time interval.

To add to your Google Sheet, open Extensions > Apps Script and paste into Editor > Code.gs
