function doGet (e) {
  var page = e.parameter['page'];
  if (!page) {
    return HtmlService.createTemplateFromFile('index').evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  return HtmlService.createTemplateFromFile(page).evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getScriptUrl() {
  var url = ScriptApp.getService().getUrl();
  return url;
}
