// MONGOOSE AND MONGO SANDBOX ROUTES
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'New Blog 2',
      snippet: 'About my new blog',
      body: 'More about my new blog'
    });
  
    blog.save()
     .then((result) => {
      res.send(result)
     })
     .catch((err) => {
      console.log(err);
     });
  });
  
  //Retrieve all the blogs for db
  app.get('/all-blogs', (req, res) => {
    Blog.find()
     .then((result) => {
      res.send(result);
    })
     .catch((err) => {
      console.log(err);
    });
  })
  
  // retrieve singular blog from dt based on ID
  app.get('/single-blog', (req, res) => {
    Blog.findById('64e9ffe19adba1e9752d5e86')
     .then((result) => {
      res.send(result);
    })
     .catch((err) => {
      console.log(err);
    });
  })