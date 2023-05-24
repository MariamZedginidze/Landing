const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.input-btn');

const screenSize = document.documentElement.clientWidth || window.innerWidth;

var tl = gsap.timeline({
  duration: 1,
});

input.addEventListener('focus', function (event) {
  const emailInput = event.target.value;

  tl.to(form.querySelector('input'), { border: '#000000 1px solid' });
});

input.addEventListener('keyup', (event) => {
  const emailInput = event.target.value;
  const mouseValidEnter = () => {
    tl.to(form.querySelector('button'), { backgroundColor: '#CAF450' });
  };
  const mouseInvalidEnter = () =>
    tl.to(form.querySelector('button'), { backgroundColor: '#000000' });

  if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInput)) {
    btn.addEventListener('mouseEnter', mouseValidEnter());
  } else {
    btn.addEventListener('mouseLeave', mouseInvalidEnter());
  }
});
if (screenSize <= 375) {
  tl.to(form.querySelector('.input-btn'), { innerHTML: 'Get' }, '<');
} else {
  tl.to(
    form.querySelector('.input-btn'),
    { innerHTML: 'Get Early Access' },
    '<'
  );
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailInput = input.value;

  if (screenSize <= 375) {
    tl.to(form.querySelector('.input-btn'), { innerHTML: 'Get' }, '<');

    if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInput)) {
      gsap.set('.mobile-thanks', { display: 'flex' });
      tl.to(form.querySelector('input'), { border: '#00000014 1px solid' });
      tl.to(form.querySelector('button'), { backgroundColor: '#EBEBEA' }, '<');
      tl.to(form.querySelector('button'), { innerHTML: '👍' }, '<');

      tl.to(
        form.querySelector('button'),
        {
          backgroundColor: '#000000',
          innerHTML: 'Get',
        },
        '>2'
      );
    } else {
      tl.to(form.querySelector('input'), { border: '#FF647C 1px solid' });
      gsap.set('.mobile-thanks', { display: 'none' });
    }
  } else if (/(.+)@(.+){2,}\.(.+){2,}/.test(emailInput)) {
    tl.to(form.querySelector('input'), { border: '#00000014 1px solid' });
    tl.to(form.querySelector('button'), { backgroundColor: '#EBEBEA' }, '<');
    tl.to(form.querySelector('button'), { innerHTML: '👍 Thank you!' }, '<');
    tl.to(
      form.querySelector('button'),
      {
        backgroundColor: '#000000',
        innerHTML: 'Get Early Access',
      },
      '>2'
    );
  } else {
    tl.to(form.querySelector('input'), { border: '#FF647C 1px solid' });
  }
});
