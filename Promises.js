const posts = {

    {title:'Post One', body: 'This is post one' },
    
    {title:'Post Two', body: 'This is post two'}
    
    };
    
    function getPost(){
    
    setTimeout(() => {
    
    let output = ' ';
    
    posts.forEach((post, index) => {
    
    output+= '<li>${post.title}</li>;
    
    });
    
    document.body.innerHTML = output;
    
    }, 1000);
    
    }
    
    function createPost(post){
    
    return new Promise((resolve, reject) => {
    
    setTimeout(() => {
    
    post.push(post);
    
    const error = true;
    
    if(!error) {
    
    resolve();
    
    }else {
    
    reject('Error: Something went wrong');
    
    }
    
    },2000)
    
    });
    
    }
    
    function create4thPost(post){
    
    return new Promise((resolve,reject) => {
    
    setTimeout(()=>{
    
    posts.push(post);
    
    const error = true;
    
    if(!error) {
    
    resolve();
    
    }else{
    
    reject('Error: Something went wrong');
    
    },6000)
    
    });
    
    }
    
    const user = {
    
    username: 'yash',
    
    lastactivitytime: '13th of Jan'
    
    }
    
    updatelastactivitytime = {
    
    return new Promise((resolve, reject) = {
    
    setTimeout(()=>{
    
    user.lastactivitytime = new Date().getTime();
    
    resolve(user.lastactivitytime)
    
    }, 1000)
    
    })
    
    }
    
    userupdatespost(){
    
    Promise.all([createPost, updatelastactivitytime])
    
    .then(([createPostresolves, updatelastactivitytimeresolves]) => {
    
    console.log(updatelastactivitytimeresolves)
    
    })
    
    .catch(err => console.log(err))
    
    }
    
    function deletepost(){
    
    return new Promise ((resolve, reject) => {
    
    setTimeout( () => {
    
    if(posts.length >0){
    
    const lastelement = posts.pop()
    
    resolve(lastelement);
    
    } else {
    
    reject('Array is empty now');
    
    }
    
    },1000);
    
    });
    
    }
    
    createPost({ title: 'Post Three', body: 'This is post three'})
    
    .then()=> {
    
    getPost()
    
    deletePost().then((deletedElement)=> {
    
    console.log(deletedElement)
    
    getPost();
    
    deletePost().then(()=> {
    
    getPost();
    
    deletePost().then(()=> {
    
    getPost();
    
    deletePost().then(()=> {})
    
    .catch{(err)=>{
    
    console.log('Inside catch block', err)
    
    });
    
    }).catch((err) => {})
    
    }).catch((err) => {})
    
    });
    
    )};
    
    .catch(err => console.log(err));