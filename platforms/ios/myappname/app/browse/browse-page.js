const BrowseViewModel = require("./browse-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
}

function onItemTap(args) {
    const view = args.object;
    const page = view.page;

    const tappedItem = args.view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;

exports.onNavigatingTo = onNavigatingTo;
