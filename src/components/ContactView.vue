<template>
    <div class="contact-form" id="contact">
        <h1>Let's get in touch!</h1>
        <div class="container">
            <div class="main">
                <div class="content">
                    <h2>Contact Me</h2>
                <form action="https://formspree.io/f/xayrpryb" method="post">

                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" required class="form-control" id="exampleFormControlInput1" name="Name">

                <label for="exampleFormControlInput1" class="form-label">Surname</label>
                <input type="text" required class="form-control" id="exampleFormControlInput1" name="Surname">

                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="Email" >

                <label for="exampleFormControlTextarea1" class="form-label">Type Message</label>
                <textarea class="form-control" required id="exampleFormControlTextarea1" rows="3" name="Message"></textarea>

                <input class="btn" type="submit" placeholder="Submit" >
                </form>
                </div>
                <div class="form-img">
                    <img src="https://i.postimg.cc/bJvVZBhx/2.png" class="rotate" alt="placeholder">
                <div class="form-text">
                    <p class="bi bi-whatsapp"> +27 79 866 6734
                    </p>
                    <p class="bi bi-house"> Cape Town, South Africa
                    </p>
                    <p class="bi bi-instagram"><a href="https://www.instagram.com/_aakeefahjones_/" target="_blank"> _aakeefahjones_</a>
                    </p>
                    <p class="bi bi-github"><a href="https://github.com/keeefles" target="_blank"> @keeefles</a>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactView',
    }
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
.bi:hover{
    color: #a8dadc;
}
.contact-form {
    justify-content: center;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    align-items: center;
}
.container {
    margin-top: 0 auto;
    max-width: 700px;
}
h1 {
    text-align: center;
    margin-top: 25px;
    padding-top: 20px;
    margin: 10px;
    color: black;
    font-weight: 400;
}
h2 {
    line-height: 40px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 500;
    color: #a8dadc;
    text-align: center;
}
.contact-form .main {
    position: relative;
    display: flex;
    margin: 30px 0;
}
.content {
    flex-basis: 50%;
    padding: 3em 3em;
    background: #fff;
    /* box-shadow: 2px 9px 49px -17px; */
}
.form-img {
    flex-basis: 50%;
    background: #fff;
    padding: 40px;
    align-items: center;
    display: grid;
}
img {
    max-width: 100%;
}
.rotate {
    animation: rotation 9s infinite linear;
    border-radius: 90px;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
.btn {
    border-radius: 35px;
    color: #000;
    padding: 10px;
    background-color: #a8dadc;
    font-size: 12px;
    border: none;
    cursor: pointer;
    transition: .4s;
}
.btn:hover {
    color: #1d3557;
    background-color: #a8dadc;
    transition: 0.5s ease;
}
form{
    margin: 30px 0;
}
input, 
textarea{
    outline: none;
    margin-bottom: 15px;
    font-stretch: 16px;
    color: #000;
    padding: 14px 20px;
    width: 100%;
    display: inline-block;
    border-radius: 15px;
    background: #fff;
    transition: 0.3s ease;
}
.contact-form button{
    font-size: 15px;
    color: #fff;
    width: 50%;
    background: #1d3557;
    transition: 0.3s ease;
    padding: 14px 15px;
}
@media(max-width:736px){
    .contact-form .main{
        flex-direction: column;
    }
    form {
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .form-img {
        order: 2;
    }
    .content {
        order: 1;
    }
}
.form-control:hover {
    border: 3px solid #1d3557;
    padding: 10px;
    margin: 10px;
}
.form-text {
    text-align: left;
    color: #000;
}
</style>