const rt = document.getElementById('root');

const head1 = React.createElement('h1',{},"Hello world!");

// ReactDOM.render(head1, rt);

const root = ReactDOM.createRoot(rt);

root.render(head1);