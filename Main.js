var nodes = [
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'estudien!'
                }
            ]
        },
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'estudien!'
                }
            ]
        },
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'estudien!'
                }
            ]
        },
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'estudien!'
                }
            ]
        },
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'AQUI!'
                }
            ]
        },
    ]
    
    
    
    const buildNodes = (nodes, parent) => {
        nodes.forEach(({ tag, children }) => {
            let nodeParent = document.createElement(tag)
            nodeParent.classList.add('uls')
    
            children.forEach(({ tag, text }) => {
                let node = document.createElement(tag)
                node.classList.add('tags')
    
                let nodeText = document.createTextNode(text)
                node.appendChild(nodeText)
                nodeParent.appendChild(node)
            })
            parent.appendChild(nodeParent)
        });
    }
    const parent = document.getElementById('container')
    buildNodes(nodes, parent)
    
    
    
    
    /////////////////////
    var count = [
        {
            'tag': 'ul',
            'children': [
                {
                    'tag': 'li',
                    'text': 'enjoy'
                },
                {
                    'tag': 'li',
                    'text': 'otra'
                }, {
                    'tag': 'li',
                    'text': 'cosa'
                }, {
                    'tag': 'li',
                    'text': 'estudien!'
                }
            ]
        } 
                 ]
    /////////////////////  clase 15 de agos //////
    
    
    const buildClicks = (count)  =>{
    
    
                                   }
    
    
    /////////////////////
    
    
    var counter =0
    
    const increment = () =>  {
        console.log(++counter)
    }
    
    
    ////////////////////
    
    document
        .getElementsByTagName('body')[0]
        .addEventListener('click', function(){
    
            e.style.backgroundColor = 'peru'
         
        });
    
    
        /////////////////  
    
        document 
            .getElementsByClassName('example')[0]
            .addEventListener('mouseover', (e)=>{
                e.target.style.backgroundColor = 'peru'
            });
    
            var arrays = 
            document
                .getElementsByClassName('example')
                console.log(arrays)
    
            
                 for (var i = 0; i<arrays.length;i++){
    
                 }
                        
        
            ///////////
            //////////////////////////////////////


            ///htttp://ajaxkode.firebaseio.com 


            //////////
            ////////////////////////

        




    
    
    