


function generateTopLangs(data, num) {
    if (num > 50) throw new Error("num > 50, too larg for a resume on langs\"")
    sres = '<svg width="512" height="128" xmlns="http://www.w3.org/2000/svg">'
    data = Array.sort(data)
    // if num is too larg we need an allgorithm to computer all colors (colors max is 50 because num max is 50)
    let colors = ["f34b7d"]
    let i = 0
    let text = (x,y,color,percent,name) => `<text x="${x}" y="${y}" fill="${color}>${percent}% ${name}</text>`
    sres += '<g transform="translate(100, 50)" font-family="Arial" font-size="12">'
    for (;num > num/2; num--) {
        sres += text(
            0, 
            i*15, 
            colors[i%colors.length], 
            data[i].percent,
            data[i].name
        )
        i++
    }
    for ( ;num > 0 ;num--) {
        sres += text(
            200, 
            i*15, 
            colors[i%colors.length], 
            data[i].percent,
            data[i].name
        )
        i++    }
    sres += "</g>"
    sres += "</svg>"
    return sres
}



function rect(x, y, width, height, fill, roundLeft = false, roundRight = false, radius = 5) {
  // Aucun arrondi : simple rect
  if (!(roundLeft || roundRight)) 
    return `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${fill}" />`
  // Commence le path
  let d = `M${x + (roundLeft ? radius : 0)},${y} `
  // Ligne droite haut
  d += `H${x + width - (roundRight ? radius : 0)} `
  // Coin droit arrondi si demandé
  if (roundRight)
    d += `A${radius},${radius} 0 0 1 ${x + width},${y + radius} `
  // Descendre vertical
  d += `V${y + height - (roundRight ? radius : 0)} `
  // Coin droit bas arrondi
  if (roundRight)
    d += `A${radius},${radius} 0 0 1 ${x + width - radius},${y + height} `
  // Ligne gauche bas
  d += `H${x + (roundLeft ? radius : 0)} `
  // Coin gauche bas arrondi
  if (roundLeft)
    d += `A${radius},${radius} 0 0 1 ${x},${y + height - radius} `
  // Monter vertical
  d += `V${y + (roundLeft ? radius : 0)} `
  // Coin gauche haut arrondi
  if (roundLeft)
    d += `A${radius},${radius} 0 0 1 ${x + radius},${y} `
  d += 'Z'
  // Retourne le path complet en chaîne
  return `<path d="${d}" fill="${fill}" />`
}





//  end page 