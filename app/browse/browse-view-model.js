var observableModule = require("data/observable");

function BrowseViewModel() {
    const viewModelz = observableModule.fromObject({
      itemz: [
          {
              name: "Item 1",
              description: "Description for Item 1",
              erdem: "https://www.ogrency.com/wp-content/uploads/2018/03/kalemlik-com-indirim-kodu-1.jpg"
          },
          {
              name: "Item 3",
              description: "Description for Item 3"
          },
          {
              name: "Item 4",
              description: "Description for Item 4"
          },
          {
              name: "Item 5",
              description: "Description for Item 5"
          },
          {
              name: "Item 6",
              description: "Description for Item 6"
          },
          {
              name: "Item 7",
              description: "Description for Item 7"
          },
          {
              name: "Item 8",
              description: "Description for Item 8"
          },
          {
              name: "Item 12",
              description: "Description for Item 12"
          },
          {
              name: "Item 13",
              description: "Description for Item 13"
          }
      ]
    });

    return viewModelz;
}

module.exports = BrowseViewModel;
