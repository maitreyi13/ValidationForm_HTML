// var loginModal = $('#loginModal');

window.onclick = function(event)
 {
   if (event.target == loginModal || event.target == registerModal) {
   $('#registerModal').hide();
   $('#email').val('');
   $('#password').val('');

   $('#loginModal').hide();
   $('#firstname').val('');
   $('#lastname').val('');
   $('#DOB').val('');
   $('#mobile').val('');
   $('#email_').val('');
   $('#password_').val('');
   $('#cpassword_').val('');
   $('#h1').prop('checked', false);
   $('#h2').prop('checked', false);
   $('#h3').prop('checked', false);
   $('#address').val('');
   $('#zipcode').val('');
   $('.man').val('');

   }
 }


var first_name = $("#firstname");
var last_name = $("#lastname");
var dob = $("#DOB");
var mobile = $("#mobile");
var email = $("#email_");
var password = $("#password_");
var cpassword = $("#cpassword_");
var hobbies = $("input[name='hobbies']");
var gender = $("input[name='gender']");
var city = $("#city");
var address = $("#address");
var zipcode = $("#zipcode");
var male = $("#male");
var female = $("#female");
var h1 = $("#h1");
var h2 = $("#h2");
var h3 = $("#h3");

var fs = $("#fs");
var ls = $("#ls");
var ds = $("#ds");
var ms = $("#ms");
var es = $("#es");
var ps = $("#ps");
var cs = $("#cs");
var hs = $("#hs");
var lo = $("#lo");
var as = $("#as");
var zs = $("#zs");
var gs = $("#gs");
var register_data={};

var index = new Index();

function Index()
{  
   this.validateForm = validateForm;
   this.first=first;
   this.last=last;
   this.db=db;
   this.mobi=mobi;
   this.emai=emai;
   this.pass=pass;
   this.cpass=cpass;
   this.ci=ci;
   this.addr=addr;
   this.z=z;



   
   function validateForm()
   {
       if(first_name.val()==''){ fs.text('First name is required');}
       if(last_name.val()==''){ ls.text('Last name is required');}
       if(dob.val()==''){ ds.text('Date Of Birth is required');}
       if(mobile.val()==''){ ms.text('Mobile is required');}
       if(email.val()==''){ es.text('Email is required');} 
       else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
           es.text('Invalid Email');
           
       }
       

       if(password.val()==''){ ps.text('Password is required');}
       if(cpassword.val()==''){ cs.text('Confirm Password is required');}
       if(city.val()==''){ lo.text('City is required');}
       if(address.val()==''){ as.text('Address is required');}
       if(zipcode.val()==''){ zs.text('Zipcode is required');}

       if ($("input[type='checkbox'][name='hobbies']:checked").length==0){
           hs.text('Hobbies are required');
       }
       else {
           hs.text('');
       }

       $("input[type='checkbox'][name='hobbies']").change(function() {
           if ($("input[type='checkbox'][name='hobbies']:checked").length==0){
               hs.text('Hobbies are required');
           }
           else {
               hs.text('');
           }
       })
     
       // if(h1.checked==false || h2.checked==false || h3.checked==false){ hs.text('Hobbies are required');}
   
       if(first_name.val()!='' && last_name.val()!='' && dob.val()!='' && mobile.val()!='' && email.val()!='' && password.val()!='' && city.val()!='' && address.val()!='' && zipcode.val()!='' && mobile.val().length==10 && (password.val()==cpassword.val())){
           
           $('#show_1').text(first_name.val());
           $('#show_2').text(last_name.val());
           $('#show_3').text((male.val()=='on')?'Male':'Female');
           $('#show_4').text(dob.val());
           $('#show_5').text(mobile.val());
           $('#show_6').text(email.val());
           $('#show_7').text(password.val());
           $('#show_8').text(city.val());
           $('#show_9').text(address.val());
           $('#show_10').text(zipcode.val());
           var checkedValue='';
           var inputElements = $('input[name="hobbies"]');
           for(var i=0; inputElements[i]; ++i){
                 if(inputElements[i].checked){
                      checkedValue += inputElements[i].defaultValue+', ';
                 }
           }
           $('#show_11').text(checkedValue);
           // sessionStorage.setItem('register_data',JSON.stringify(data));
           $('#registerModal').hide();
           $('#firstname').val('');
           $('#lastname').val('');
           $('#DOB').val('');
           $('#mobile').val('');
           $('#email_').val('');
           $('#password_').val('');
           $('#cpassword_').val('');
           $('#h1').prop('checked', false);
           $('#h2').prop('checked', false);
           $('#h3').prop('checked', false);
           // $('#dm').reset();
           $('#address').val('');
           $('#zipcode').val('');

           
           alert('Form submitted successfully.');
           setTimeout(()=>{
               $('#detailModal').show();
           },1000);
           
           

       }
       else {
           return false;
       }
   }

   function first()
   {
       if(first_name.val()==''){ fs.text('First name is required');}else {
           first_name.val(first_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
           fs.text('');
           if (first_name.val().length<3||first_name.val().length>15){
               fs.text('Invalid First Name');
           }
       }
   }

   function last()
   {
       if(last_name.val()==''){ ls.text('Last name is required');} else {
           last_name.val(last_name.val().replace(/[^a-z A-Z.]/g, '').replace(/(\..*?)\..*/g, '$1'));
           ls.text('');
           if(last_name.val().length<3||last_name.val().length>15){
               ls.text('Invalid First Name');
           }
       }
    }
    
   function emai()
   {
       if(email.val()==''){ 
           es.text('Email is required');
       } 
       else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())==false){
           es.text('Invalid Email');
       }
       else 
       {
           es.text('');
       }
   }
   function mobi()
   {
       if(mobile.val()==''){ 
           ms.text('Mobile is required');
       } 
       else {
           mobile.val(mobile.val().replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
           ms.text('');
           if(mobile.val().length<10){
               ms.text('Invalid Mobile number');
           }
       }
   }


}
