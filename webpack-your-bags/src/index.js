import './styles.scss';

// If we have an anchor, render the Button component on it
if (document.querySelectorAll('text').length) {
    require.ensure([], () => {
        const Button = require('./components/button/button').default;
        const button = new Button('google.com');

        button.render('a');
    });
}

// If we have a title, render the Header component on it
if (document.querySelectorAll('h1').length) {
    require.ensure([], () => {
        const Header = require('./components/header/header').default;

        new Header().render('h1');
    });
}
