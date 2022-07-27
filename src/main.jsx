import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RevContainer1 from './ReviewContainer1'
import RevContainer2 from './ReviewContainer2'

ReactDOM.createRoot(document.querySelector('.review-container-1')).render(<RevContainer1 />)

ReactDOM.createRoot(document.querySelector('.review-container-2')).render(<RevContainer2 />)


