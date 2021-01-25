import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = ()=>{
    let list = localStorage.getItem('list');
    if(list){
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return []
    }
}

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditting, setIsEditting] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});
    
    const showAlert = (show = false, type = '', msg = '')=>{
        setAlert({show, type, msg});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name) {
            showAlert(true, 'danger', 'please enter value');
        } else if(name && isEditting) {
            setList(list.map((item)=>{
                if(item.id === editID) {
                    return {...item, title: name}
                }
                return item;
            }))
            setName('');
            setEditID(null);
            setIsEditting(false);
            showAlert(true, 'success', 'item edited')
        } else {
            const newItem = {id: new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            showAlert(true, 'success', 'item added');
            setName('')
        }
    }
    const clearList = ()=>{
        showAlert(true, 'danger', 'list empty');
        setList([]);
    }
    const clearItem = (id)=>{
        setList(list.filter((item)=> item.id !== id));
        showAlert(true, 'danger', 'item removed');
    }
    const editItem = (id)=>{
        const edited = list.find((item)=> item.id === id);
        setIsEditting(true);
        setEditID(id);
        setName(edited.title);

    }

    useEffect(()=>{
        const alertTimeOut = setTimeout(() => {
            showAlert();
        }, 2500);
        return ()=> clearTimeout(alertTimeOut);
    }, [alert]);
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    
  return (
  <section className='section-center'>
      <form className='grocery-form'
      onSubmit={handleSubmit} >
          {alert.show && <Alert {...alert} />}
          <h3>grocery bud</h3>
          <div className='form-control' >
              <input type='text'
              className='grocery'
              placeholder='e.g. potato'
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
              <button type='submit' className='submit-btn'>
                  {isEditting ? 'edit' : 'submit'}
              </button>
          </div>
      </form>

      {list.length > 0 && (
          <div className='grocery-container' >
          <List items={list} 
          clearItem={clearItem}
          editItem={editItem} />
          <button className='clear-btn'
          onClick={clearList} >
              clear items
          </button>
      </div>
      )}

  </section>
  );
}

export default App
