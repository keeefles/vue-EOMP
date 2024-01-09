<template>
    <div class="container-fluid">
        <div class="rowContact">
            <div class="colContact">
                <form action="https://formspree.io/f/mvojykkz" method="post">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1">
                <label for="exampleFormControlInput1" class="form-label">Surname</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="surname">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                <label for="exampleFormControlTextarea1" class="form-label">Send Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <input class="btn" type="submit" name="Send" value="Submit">
                </form>
            </div>
            <div class="colContact">
                <h2>Get in Touch With Me:</h2>
                <img src="https://i.postimg.cc/MpxP0X1b/icons8-github-32.png">
            <a href="https://github.com/keeefles" target="_blank"> @keeefles</a><br>
            <img src="https://i.postimg.cc/QMrV6Gf3/icons8-gmail-32.png">
            <a href=""> aakeefahj@gmail.com</a><br>
            <img src="https://i.postimg.cc/zXNS663q/icons8-whatsapp-32.png">
                +27 79 866 6734<br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
/* .row {
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
}
#contact3 {
    width: 300px;
    height: auto;
    background-color: #fff;
    box-shadow: 0 0 20px 0 #a8dadc;
    border-radius: 15px;
    padding: 10px;
    text-align: center;
    justify-content: center;
    position: relative;
}. */
.btn {
    border-radius: 30px;
    color: #fff;
    padding: 10px;
    margin: 10px;
    background-color: #1d3557;
    font-size: 12px;
    border: none;
    cursor: pointer;
    transition: .4s;
}
#contact{
    background-color: rgb(193, 193, 193);
}
.rowContact{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 80vh;
    background-color: #a8dadc;
}
.colContact{
    flex-basis: 45%;
    margin: 10px;
}
.contactForm{
    border: #000 2px solid;
    width: max-content;
}
.input-field{
    padding: 5px 10px;
    margin: 10px 10px;
    box-shadow: 0 0 5px 0 #000;
}
.input-field-textarea-field{
    box-shadow: 0 0 5px 0 #000;
    padding: 10px 20px;
    margin: 10px 10px;
}
#contact h2{
    font-weight: 300;
    font-size: 60px;
    padding-bottom: 30px;
}
</style>