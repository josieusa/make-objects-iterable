# make-objects-iterable

## Why?

Because with this repo you'll be able to do this:

    for ({ k, v } of object) {
        // TODO
    }

Other supported keys instead of `k` or `v`:

* `key`
* `val`
* `value`
* `0` (for `k`)
* `1` (for `v`)

This more classic syntax is also supported:

    for ([k, v] of object) {
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

Yes. They also make your code less FP-style. And functional programming is going to conquer the world. In fact, this repo is powerful, but with great power comes great responsibility. For example, you may define your own MyObject class, to make your code more explicit, but that's up to you.

## Why `{k, v}` and not `[key, value]` as in `Object.prototype.entries()`?

Pros:

* You can destructure both the n-th value and one or more of its sub-fields at once, like this:

        for ({ k, v, v: { subField1 }, v: { subField1: { subField2 } } } of object) {
            console.log(subField1, subField2);
            // TODO
        }
  
  You could not do this if you destructured with `[key, value]` instead. Anyway, **the `[key, value]` syntax is also supported by this repo**.
* The curly braces instead of the square brackets further clarify that the variable being iterated is an object
* If you don't need the key inside the `for...of` loop, you can just omit it

## How to rename the variables `k` and `v`?

Like this:

      for ({ k: anotherName, v: yetAnotherName } of object) {
          console.log(anotherName, yetAnotherName);
          // TODO
      }

## Where to look for more help?

Study ES6 destructuring assignment on Mozilla Developer Network.
