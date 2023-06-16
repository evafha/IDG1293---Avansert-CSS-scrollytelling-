//The code selects all elements with a class of 'mercury' and assigns them to the scrollAnimations variable using the document.querySelectorAll() method.
const scrollAnimations = document.querySelectorAll('.mercury, .three-wave, .animation-from-left, .animation-from-right');

//The code creates an IntersectionObserver and passes it a callback function that is executed when the observed elements intersect with the viewport. The callback function loops through all the entries that intersect with the viewport and adds or removes the class 'animation-mercury' depending on whether the element is intersecting or not.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-rise');
      entry.target.classList.add('animation-sides');

    } else {
      entry.target.classList.remove('animation-rise');
      entry.target.classList.remove('animation-sides');

    }
  })
}, {
  threshold: 0.4
});

//The observer is set up to watch all the scrollAnimations elements that were selected in step 1. This is done by looping through all the elements in scrollAnimations and calling the observe() method on the IntersectionObserver instance for each element.
for (let i = 0; i < scrollAnimations.length; i++) {
  const el = scrollAnimations[i];

  observer.observe(el);
}