/**
 * Welcome to Pebble.js!
 *
 * This is the app run on pebble watches
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'ecobee',
  icon: 'images/app_logo.png',
  subtitle: 'Hello Eugene!',
  body: 'Press any button!',
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036' // Hex colors
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'test title',
        icon: 'images/app_logo.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
    Pebble.sendAppMessage( { '0': 42, '1': 'String value' },
        function(e) {
          console.log('Successfully delivered message with transactionId='
              + e.data.transactionId);
        },
        function(e) {
          console.log('Unable to deliver message with transactionId='
              + e.data.transactionId
              + ' Error is: ' + e.error.message);
        }
    );
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});