# KoboToolbox to Google Sheets: Google Apps Script
Google Apps script to sends a call to KoboToolbox and return data from form submissions to a Google Sheet.

This script has a higher performance than the Google Sheets `IMPORTDATA()` function (which can lag if lots of data is imported), and eliminates the need for a paid API connection plugin.

Note that this script only works for KoboToolbox projects that **do not require authentication to see forms and submit data**.

Before starting, rename the sheet to which you want to import the data to 'Data'.

To add to your Google Sheet, open Extensions > Apps Script and paste into Editor > Code.gs.

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/6996e604-0a99-4d9a-a615-5a36061829b9)

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/70b45597-bd54-4291-9c17-f71ae4510144)

In the line with `<data_url_csv>`, replace this with the URL to make an API call to your KoboToolbox form's data and return it as a CSV. This can be constructed using instructions from: https://support.kobotoolbox.org/synchronous_exports.html.

A custom menu will appear with a menu item to run the script.

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/83130738-3e46-4e8c-84a7-ffb2aa831475)

Note that the KoboToolbox server needs up to 15 mins to make collected data from a project available through the API, so a slight lag may be experienced between form submissions and this being able to be pulled into the Google Sheet.

The script can also can be set to a scheduler within Google Apps Script to automatically import data at a set time interval. To do so, open Extensions > Apps Script and go to Triggers. Select Add Trigger.

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/22cdbdf2-02ce-49dd-8d6f-7b7c57363697)

Update the modal as follows:

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/11939c81-41a3-444f-8c76-9ab7f4829ef0)

Then choose your update interval and Save:

![image](https://github.com/rfromthecastle/kobo-toolbox-to-google-sheets/assets/18660080/da1d628e-7c9b-4ec4-b434-3231ef2cfedc)
