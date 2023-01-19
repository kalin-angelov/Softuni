function browserHistory(object, array) {

    let browser = object['Browser Name'];
    let openTabs = object['Open Tabs'];
    let recentlyClosed = object['Recently Closed'];
    let browserLogs = object['Browser Logs'];
    for (let el of array) {
        let [command, site] = el.split(' ');
        switch (command) {
            case 'Open':
                openTabs.push(site);
                browserLogs.push(el);
                break;
            case 'Close' :
                for (let openSite of openTabs) {
                    if (openSite === site) {
                        let index = openTabs.indexOf(openSite);
                        let closedSite = openTabs.splice(index, 1);
                        browserLogs.push(el);
                        recentlyClosed.push(closedSite);
                    }
                }
                break;
            default:
                openTabs = [];
                recentlyClosed = [];
                browserLogs = [];
                break;
        }
    }

    console.log(browser);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
    console.log(`Browser Logs: ${browserLogs.join(', ')}`);

}
browserHistory(
{
  "Browser Name":"Mozilla Firefox","Open Tabs":["YouTube"],
  "Recently Closed":["Gmail", "Dropbox"],
  "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);
