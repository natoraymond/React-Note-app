import React from 'react'

function Main({activeNote, onUpdateNote}) {



  const onEditField = (key, value) => {

    onUpdateNote({
      id: activeNote.id,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  // if(!activeNote) return <div className='no-active-note'>No Note selected</div>

  
  return (
    <div className='app-main'>
      <div className='app-main-note-edit'>
        <input type='text' id='title'   onChange={(e) => onEditField('title', e.target.value) } autoFocus/>
        <textarea id='body' placeholder='write your note information here ...' />
        {/* <input type='text' id='title' value={activeNote.title} onChange={(e) => onEditField('title', e.target.value) } autoFocus/> */}
        {/* <textarea id='body' placeholder='write your note information here ...' value={activeNote.body} onChange={(e) => onEditField('body', e.target.value) } /> */}
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>YOUR TITLE PAGE</h1>
        <div className='markdown-preview'>note preview</div>
        {/* <h1 className='preview-title'>{activeNote.title}TITLE   {activeNote.title}</h1> */}
        {/* <div className='markdown-preview'>{activeNote.body}note preview</div> */}
      </div>
    </div>
  );
}

export default Main;
