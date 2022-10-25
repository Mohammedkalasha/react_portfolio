import React from 'react'
import "./Skills.css"

function Skills() {
  return (
    <section className="skills section" id="skills">
    {/* <h2 className="section_title">Skills</h2> */}

    <div className="skills_container bd_grid">
      <div>
        <h2 className="skills_subtitle">skills</h2>
        <p className="skills_text"> Front-end developers create the user interface  that determines what each part of a site or application does and how it will look.</p>
      
          <div className="skills_data">
            <div className="skills_name">
              <i className='bx bxl-html5 skill_icon'></i>
              <span className="skills_name">HTML5</span>
            </div>
            <div><span className="skill_percentage">85%</span></div>
            <div className="skill_bar skill_html"></div>
          </div>

          
           <div className="skills_data">
            <div className="skills_name">
              <i className='bx bxl-css3 skill_icon' ></i>
              <span className="skills_name">CSS3</span>
            </div>
            <div><span className="skill_percentage">75%</span></div>
            <div className="skill_bar skill_css"></div>
          </div>

        
          <div className="skills_data">
            <div className="skills_name">
              <i className='bx bxl-javascript skill_icon' ></i>
              <span className="skills_name">JavaScript</span>
            </div>
            <div><span className="skill_percentage">70%</span></div>
            <div className="skill_bar skill_js"></div>
          </div>

        
          <div className="skills_data">
            <div className="skills_name">
              <i className='bx bxl-bootstrap skill_icon' ></i>
              <span className="skills_name">Bootstrap</span>
            </div>
            <div><span className="skill_percentage">75%</span></div>
            <div className="skill_bar skill_bs"></div>
          </div>

          <div className="skills_data">
            <div className="skills_name">
            <i className='bx bxl-react skill_icon'></i>
              <span className="skills_name">React</span>
            </div>
            <div><span className="skill_percentage">70%</span></div>
            <div className="skill_bar skill_rt"></div>
          </div>
      </div>
    </div>
  </section>
  )
}

export default Skills