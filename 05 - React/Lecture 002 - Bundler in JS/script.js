const rt = document.getElementById('root');

const head1 = React.createElement('h1',{
    className: 'header',
    id: 'title',
    style:{
        color: 'red',
        backgroundColor: 'pink',
        padding: '10px'
    }
},"Hello world!");

const head2 = React.createElement('p',{
    className: 'header',
    id: 'title',
    style:{
        color: 'white',
        backgroundColor: 'black',
        padding: '10px'
    }
},"Hello world! abcd");

// ReactDOM.render(head1, rt);

const root = ReactDOM.createRoot(rt);

root.render(head1);
root.render(head2);

const div1 = React.createElement('div',{

},[head1,head2,head1]);

root.render(div1);