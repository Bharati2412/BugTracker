import React from 'react'

function sidebar() {
    return (
        <div>
             <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Dashboard</span>
      </a>
    </li>{/* End Dashboard Nav */}

    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Tickets</span>
      </a>
    </li>{/* End Tickets Nav */}

    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>All Projects</span>
      </a>
    </li>{/* End Admin Nav */}
   
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-journal-text" /><span>Forms</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="forms-elements.html">
            <i className="bi bi-circle" /><span>Form Elements</span>
          </a>
        </li>
        <li>
          <a href="forms-layouts.html">
            <i className="bi bi-circle" /><span>Form Layouts</span>
          </a>
        </li>
        <li>
          <a href="forms-editors.html">
            <i className="bi bi-circle" /><span>Form Editors</span>
          </a>
        </li>
        <li>
          <a href="forms-validation.html">
            <i className="bi bi-circle" /><span>Form Validation</span>
          </a>
        </li>
      </ul>
    </li>{/* End Forms Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-layout-text-window-reverse" /><span>Tables</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="tables-general.html">
            <i className="bi bi-circle" /><span>General Tables</span>
          </a>
        </li>
        <li>
          <a href="tables-data.html">
            <i className="bi bi-circle" /><span>Data Tables</span>
          </a>
        </li>
      </ul>
    </li>{/* End Tables Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-bar-chart" /><span>Charts</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="charts-chartjs.html">
            <i className="bi bi-circle" /><span>Chart.js</span>
          </a>
        </li>
        <li>
          <a href="charts-apexcharts.html">
            <i className="bi bi-circle" /><span>ApexCharts</span>
          </a>
        </li>
        <li>
          <a href="charts-echarts.html">
            <i className="bi bi-circle" /><span>ECharts</span>
          </a>
        </li>
      </ul>
    </li>{/* End Charts Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-gem" /><span>Icons</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="icons-bootstrap.html">
            <i className="bi bi-circle" /><span>Bootstrap Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-remix.html">
            <i className="bi bi-circle" /><span>Remix Icons</span>
          </a>
        </li>
        <li>
          <a href="icons-boxicons.html">
            <i className="bi bi-circle" /><span>Boxicons</span>
          </a>
        </li>
      </ul>
    </li>{/* End Icons Nav */}
    <li className="nav-heading">Pages</li>
    <li className="nav-item">
      <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>My Profile</span>
      </a>
    </li>{/* End Profile Page Nav */}
    
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-contact.html">
        <i className="bi bi-envelope" />
        <span>Contact Admin</span>
      </a>
    </li>{/* End Contact Page Nav */}
    
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-login.html">
        <i className="bi bi-box-arrow-in-right" />
        <span>Log Out</span>
      </a>
    </li>{/* End Login Page Nav */}
    
    
  </ul>
</aside>{/* End Sidebar*/}

        </div>
    )
}

export default sidebar
