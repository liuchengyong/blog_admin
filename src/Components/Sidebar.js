import React, {Component} from 'react'


import 'styles/sidebar.scss';

class Sidebar extends Component{
  render() {
    return (
      <div className="sidebar-container">
          <ul className="side-menu">
              <li>
                <a>
                  <i className="fa fa-home"></i> 
                  Home 
                  <span className="fa fa-chevron-down"></span>
                </a>
                <ul className="nav child_menu">
                  <li><a href="index.html">Dashboard</a></li>
                  <li><a href="index2.html">Dashboard2</a></li>
                  <li><a href="index3.html">Dashboard3</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="form.html">General Form</a></li>
                  <li><a href="form_advanced.html">Advanced Components</a></li>
                  <li><a href="form_validation.html">Form Validation</a></li>
                  <li><a href="form_wizards.html">Form Wizard</a></li>
                  <li><a href="form_upload.html">Form Upload</a></li>
                  <li><a href="form_buttons.html">Form Buttons</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="general_elements.html">General Elements</a></li>
                  <li><a href="media_gallery.html">Media Gallery</a></li>
                  <li><a href="typography.html">Typography</a></li>
                  <li><a href="icons.html">Icons</a></li>
                  <li><a href="glyphicons.html">Glyphicons</a></li>
                  <li><a href="widgets.html">Widgets</a></li>
                  <li><a href="invoice.html">Invoice</a></li>
                  <li><a href="inbox.html">Inbox</a></li>
                  <li><a href="calendar.html">Calendar</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="tables.html">Tables</a></li>
                  <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="chartjs.html">Chart JS</a></li>
                  <li><a href="chartjs2.html">Chart JS2</a></li>
                  <li><a href="morisjs.html">Moris JS</a></li>
                  <li><a href="echarts.html">ECharts</a></li>
                  <li><a href="other_charts.html">Other Charts</a></li>
                </ul>
              </li>
              <li><a><i className="fa fa-clone"></i>Layouts <span className="fa fa-chevron-down"></span></a>
                <ul className="nav child_menu">
                  <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                  <li><a href="fixed_footer.html">Fixed Footer</a></li>
                </ul>
              </li>
            </ul>
      </div>);
  }
}

export default Sidebar