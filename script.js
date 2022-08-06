// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');
const Time = require('Time');
const Materials = require('Materials');
const Textures = require('Textures');
const NativeUI = require('NativeUI');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

function getRandomInt() {
  var ls = [-130, -100, -70, -40, -10, 10, 40, 70, 100, 130];
  // pick a random element from the array
  return ls[Math.floor(Math.random() * ls.length)];
}

(async function () {
  const picker = NativeUI.picker;
  Patches.inputs.setVector('vec1', Reactive.vector(0,500,0));
  Patches.inputs.setVector('vec2', Reactive.vector(0,-500,0));

  var old_counter = 0
  Time.setInterval(() => {
    Patches.outputs.getScalar('counter').then(event=> {
      event.monitor().subscribe(function (values) {
        if (values.newValue > old_counter) {
          old_counter = values.newValue
          var num = getRandomInt();
          // var entity_list = ['yellow_mooncake', 'blue_mooncake', 'pink_mooncake']
          // var random_entity = entity_list[Math.floor(Math.random() * entity_list.length)];
          // var material = Materials.findFirst('obstacle')
          // var texture = Textures.findFirst(random_entity)
          // material.diffuse = texture;

          Patches.inputs.setVector('vec1', Reactive.vector(num,500,0));
          Patches.inputs.setVector('vec2', Reactive.vector(num,-500,0));
        }
      });
    });
    }, 1000);

})(); // Enables async/await in JS [part 2]
