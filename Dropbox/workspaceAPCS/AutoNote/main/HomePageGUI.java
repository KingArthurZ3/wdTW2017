package main;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.awt.BorderLayout;
 
// An AWT program inherits from the top-level container java.awt.Frame
public class HomePageGUI extends Frame implements ActionListener {
   private Label lblwelcome;    // Declare a Label component 
   private TextField recordStatus; // Declare a TextField component 
   private Button enterBtn;   // Declare a Button component

 
   // Constructor to setup GUI components and event handlers
   public HomePageGUI () {
      setLayout(new FlowLayout());
         // "super" Frame, which is a Container, sets its layout to FlowLayout to arrange
         // the components from left-to-right, and flow to next row from top-to-bottom.
 
      lblwelcome = new Label("Welcome to AutoNote");  // construct the Label component
      lblwelcome.setSize( 400, 80 );
      add(lblwelcome);                    // "super" Frame container adds Label component
                     // "super" Frame container adds TextField component
 
      enterBtn = new Button("Click Here to Begin Recording");   // construct the Button component
      add(enterBtn);                    // "super" Frame container adds Button component
 
      enterBtn.addActionListener(this);
         // "enterBtn" is the source object that fires an ActionEvent when clicked.
         // The source add "this" instance as an ActionEvent listener, which provides
         //   an ActionEvent handler called actionPerformed().
         // Clicking "enterBtn" invokes actionPerformed().
      
      recordStatus = new TextField("Not Recording");
      add(recordStatus);
      recordStatus.setMinimumSize( new Dimension(300, 400) );
 
      setTitle("AutoNote");  // "super" Frame sets its title
      setSize( super.getWidth(), 100);        // "super" Frame sets its initial window size
 
      // For inspecting the Container/Components objects
      // System.out.println(this);
      // System.out.println(lblCount);
      // System.out.println(tfCount);
      // System.out.println(btnCount);
 
      setVisible(true);         // "super" Frame shows
 
      // System.out.println(this);
      // System.out.println(lblCount);
      // System.out.println(tfCount);
      // System.out.println(btnCount);
   }
 
 
   // ActionEvent handler - Called back upon button-click.
   @Override
   public void actionPerformed(ActionEvent evt) {

      // changes status of recording
      if(recordStatus.getText().equals("Recording...")){
          recordStatus.setText("Paused"); 
          enterBtn.setLabel( "Click Here to Resume" );
      }else if(recordStatus.getText().equals("Paused") || recordStatus.getText().equals("Not Recording")){
          recordStatus.setText("Recording..."); 
          enterBtn.setLabel( "Click Here to Pause" );
      }
      
   }
}

