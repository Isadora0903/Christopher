function blockRect(r1, r2){

	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();

	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

	if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight ) {
		var overLapX = sumHalfWidth - Math.abs(catX);
		var overLapY = sumHalfHeight - Math.abs(catY);

		if (overLapX >= overLapY) { //por cima ou por baixo
			if (catY > 0) {
				r1.posY += overLapY;
			}else {
				r1.posY -= overLapY;
			}
		}else{ //direita ou esquerda
			if (catX > 0) {
				r1.posX += overLapX;
			}else{
				r1.posX -= overLapX;
			}

		}
	}
} 
