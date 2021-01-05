
// fetch('../data.js').then(() => console.log("from fetch", data));

function status(response) {
    if (response.status !== 200) {
      console.log("Error : " + response.status);
      // Method reject() akan membuat blok catch terpanggil
      return Promise.reject(new Error(response.statusText));
    } else {
      // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
      return Promise.resolve(response);
    }
  }

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
    // Parameter error berasal dari Promise.reject()
    console.log("Error : " + error);
}



function getWork() {


    fetch('../data.js').then(status).then(() => {
    console.log("from work func:", data)
    let workBlock = '<div><h2 class="work-Title">Our Works</h2></div>';

    data.works.forEach(function (works) {
        workBlock += `
            <div class="cardBox">
                <div class="imgBox"><img src="${works.path + works.image}" alt="Brand Image"></div>
                <div class="descBox">
                <h2>${works.projectname}</h2>
                <p>${works.projectdesc}</p>
                </div>
            </div>`
    })

    workBlock += 
    `<div class="ctaBox row">
        <div class="col s6 m4 l4">
            <h2 class="cta-text">Ayo Mulai Sekarang!</h2></div>
        
        <div class="col s6 m5 l5">
            <h2 class="cta-desc">Jadikan bisnis anda lebih menarik lagi. kami sangat antusias untuk berdiskusi dengan anda :)</h2>
            <a class="cta-button" href="mailto:spacearkchief@gmail.com">Hubungi kami</a>
        </div>
    </div>`

    document.getElementById('body-content').style.display = 'flex';
    document.getElementById('body-content').style.paddingTop = '150px'
    document.getElementById('body-content').style.flexWrap = 'wrap';
    document.getElementById('body-content').style.justifyContent = 'center';
    document.getElementById("body-content").innerHTML = workBlock;
    document.getElementById("body-content").scrollIntoView();
    
    }).catch(error);

    
    
}
function getAbout() {
    let content = document.getElementById("body-content");
    content.innerHTML = `<div class="aboutBox row">
            <div class="topBox col s10 m10 l10">
                <h2 class="aboutTitle">Kami membangun untuk menjadikan yang terbaik.</h2>
            </div>
            <div class="BottomBox col s8 m6 l6">
                <h2 class="aboutText">Kami mempunyai ambisi untuk menjadikan setiap produk berdampak pada kehidupan.
                    mempersembahkan yang terbaik dan berarti.
                </h2>
            </div>
            <div class="col s12 m12 l12">

            </div>

            <div class="ctaBox row">
        <div class="col s6 m4 l4">
            <h2 class="cta-text">Ayo Mulai Sekarang!</h2></div>
        
        <div class="col s6 m5 l5">
            <h2 class="cta-desc">Jadikan bisnis anda lebih menarik lagi. kami sangat antusias untuk berdiskusi dengan anda :)</h2>
            <a class="cta-button2" href="mailto:spacearkchief@gmail.com">Hubungi kami</a>
        </div>
    </div>
        </div>`

        content.scrollIntoView(false);
       
}
function getContact() {
    let content = document.getElementById("body-content");
    content.innerHTML = `
    <div class="contact-box row">
    <div class="ctitleBox col s12 m12 l12">
        <h2>Kami Selalu Siap</h2>
    </div>
    <div class="ctitle col s3 m3 l3">
        <p>Pengusaha</p>
    </div>
    <div class="ctitleDesc col s9 m7 l4"><p>Tertarik dengan layanan kami? kami selalu siap membantu anda.</p></div>

    
    <div class="courService col s12 m12 l12">
        <h3>Layanan Kami</h3>
    </div>
    <div class="cservice col s6 m3 l3">
        <h4>Branding.</h4>
        <p>Jadikan usaha anda lebih dikenal.</p>
    </div>
    <div class="cservice col s6 m3 l3">
        <h4>Website.</h4>
        <p>Luaskan jangkauan digital anda.</p>
    </div>
    <div class="cservice col s6 m3 l3">
        <h4>Iklan Digital.</h4>
        <p>Tepat dan sesuai dengan trend.</p>
    </div>
    <div class="cservice col s6 m3 l3">
        <h4>Cetak Iklan.</h4>
        <p>Tarik perhatian konsumen dengan iklan cetak.</p>
    </div>

        <div class="cctabox col s6 m4 l4">
            <h2 class="cta-text">Ayo Mulai Sekarang!</h2></div>
        
        <div class="col s6 m5 l5">
            <h2 class="cta-desc">Jadikan bisnis anda lebih menarik lagi. kami sangat antusias untuk berdiskusi dengan anda :)</h2>
            <a class="cta-button2" href="mailto:spacearkchief@gmail.com">Hubungi kami</a>
        </div>
    
</div>
    `

    content.scrollIntoView(false);
}

function getData() {
    console.log("on func:", data)
}

