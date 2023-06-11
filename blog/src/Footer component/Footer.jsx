import React from 'react'

function Footer() {
  return (
    <div className='page-footer'>
        <div className='footer-grid'>
            <div className='footer-grid-column'>
                <a href='/' src='' alt=''> the muse</a>
                <div className='logo-under'> c2023 Daily Muse Inc.</div>
            </div>
        </div>
        <div className='footer-column'>
            <h2 className='footer-header'> About the Muse</h2>
            <ul className='footer-column'>
                <li>
                    <a href='/'> About Us</a>
                </li>
                <li>
                    <a href='/'> Careers</a>
                </li>
                <li>
                    <a href='/'> FAQs</a>
                </li>
                <li>
                    <a href='/'> Contact Us </a>
                </li>
                <li>
                    <a href='/'> Search Jobs</a>
                </li>
                <li>
                    <a href='/'> Browse Companies</a>
                </li>
                <li>
                    <a href='/'> Terms of Use</a>
                </li>
                <li>
                    <a href='/'> Privacy Policy</a>
                </li>
            </ul>
        </div>

        <div className='second-job-column'> 
            <h2 className='job-column-header'> Popular Jobs</h2>
            <ul className='column-links'>
                <li>
                    <a href='/'> New York Jobs </a>
                </li>
                <li>
                    <a href='/'> San Francisco Jobs </a>
                </li>
                <li>
                    <a href='/'> Seattle Jobs </a>
                </li>
                <li>
                    <a href='/'> Engineering Jobs </a>
                </li>
                <li>
                    <a href='/'> Marketing Jobs </a>
                </li>
                <li>
                    <a href='/'> Information Technology Jobs </a>
                </li>
            </ul>
        </div>

        <div className='column-3'>
            <h2 className='column-header'> Get Involved</h2>
            <ul className='column-3-links'>
                <li> 
                    <a href='/'> For Employers</a>
                </li>
                <li> 
                    <a href='/'> The Muse Book: The New Rules of Work</a>
                </li>
                <li> 
                    <a href='/'> For Career Coaches </a>
                </li>
                <li> 
                    <a href='/'> Sebd Feedback About The Muse</a>
                </li>
                <li> 
                    <a href='/'> Tell A Friend</a>
                </li>
            </ul>
        </div>
        <div className='footer-column-social'> 
        <h2 className='footer-column-header'> Join the Conversation</h2>
        <ul className='socialhandles-links'>
            <li>
                <a href='/'> FaceBook </a>
            </li>
            <li>
                <a href='/'> LinkedIn </a>
            </li>
            <li>
                <a href='/'> Twitter </a>
            </li>
            <li>
                <a href='/'> Pinterest </a>
            </li>
            <li>
                <a href='/'> Instagram </a>
            </li>
        </ul>
        
        </div>
    </div>
  )
}

export default Footer