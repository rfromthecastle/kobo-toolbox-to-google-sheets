/**
 * Sends a call to KoboToolbox and returns data from form submissions to the sheet.
 * 
 * This script has a higher performance than the Google Sheets IMPORTDATA() function,
 * and can be set to a scheduler within Google Apps Script.
 *
 * To add to your Google Sheet, open Extensions > Apps Script and paste into Editor > Code.gs.
 * A custom menu will appear with a menu item to run the script.
 *
 * @return KoboToolbox submissions in columns and rows.
 * 
 * Written by Rica Zamora Duchateau (Clinton Health Access Initiative)
*/

//Adds a custom menu to the Google Sheet, with a dropdown to call the function
function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Kobo Toolbox Importer")
    .addItem("Import data from Kobo Toolbox", "importCSVFromUrl")
    .addToUi();
}

//Displays an alert as a Toast message
function displayToastAlert(message) {
  SpreadsheetApp.getActive().toast(message, "Message:"); 
}

//Construct Kobo Toolbox API call and return results as CSV to the current sheet
function importCSVFromUrl() {
  //Replace <data_url_csv> with a CSV API call to your form data - see https://support.kobotoolbox.org/synchronous_exports.html
  const url = <data_url_csv>
  var contents = Utilities.parseCsv(UrlFetchApp.fetch(url),';');
  var sheetName = writeDataToSheet(contents, 'Data');
  displayToastAlert("Data from Kobo Toolbox was successfully imported into " + sheetName + ".");
}

//Clear current sheet and fill with contents from DHIS2 API call
function writeDataToSheet(data,sheetName) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  sheet.clear(); // Clear sheet from existing content
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  return sheet.getName();
}
