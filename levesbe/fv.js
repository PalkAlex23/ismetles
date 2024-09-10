export function kutyaKiir(kutya) {
    const tartalomELEM = $(".tartalom")
    tartalomELEM.append(
        `
        <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title">${kutya.nev}</h3>
                <p class="card-text">${kutya.kor}</p>
                <p class="card-text">${kutya.nem}</p>
                <button class="kiv btn btn-success">Kiválaszt</button>
            </div>
        </div>
        `
    )
}