# make-objects-iterable

## Why?

Because with this repo you'll be able to do this:

    for ({ k, v } of object) {
        // TODO
    }

## How?

Call `makeObjectsIterable()` at the beginning of your app in order to modify the `Object` prototype.

## Where?

In Node 6 LTS.

## When?

I'm going to make a NPM module out of this repo, but please don't ask for an ETA.

## Who?

Me.

## Wait, weren't global variables and global side effects considered harmful?

Yes. They also make your code less FP-style. And functional programming is going to conquer the world. In fact, this repo is powerful, but with great power comes great responsibility.

## Why `{k, v}` and not `[key, value]` as in `Object.prototype.entries()`?

Pros:

* You can destructure both the n-th value and one or more of its sub-fields at once, like this:

        for ({ k, v, v: { subField1 }, v: { subField1: { subField2 } } } of object) {
            console.log(subField1, subField2);
            // TODO
        }
  
  You could not do this if you destructure with `[key, value]` instead. It's even disallowed by this repo. Use `Object.prototype.entries()` if you want to do that anyway.
* The curly braces instead of the square brackets further clarify that the variable being iterated is an object
* If you don't need the key inside the `for...of` loop, you can just omit it

## How to rename the variables k and v?

Like this:

      for ({ k: anotherName, v: yetAnotherName } of object) {
          console.log(subField2);
          // TODO
      }

## Where to look for more help?

Study ES6 destructuring assignment on Mozilla Developer Network.
