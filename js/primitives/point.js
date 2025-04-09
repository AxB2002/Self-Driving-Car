// === POINT CLASS ===
// Represents a point in 2D space with x and y coordinates
class Point {
  // === CONSTRUCTOR ===
  // Creates a new point with specified x and y coordinates
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // === COMPARISON METHOD ===
  // Checks if this point is equal to another point
  // Returns true if both x and y coordinates match
  equals(point) {
    return this.x == point.x && this.y == point.y;
  }

  // === DRAWING METHOD ===
  // Draws the point on the canvas
  // @param ctx - canvas context
  // @param size - diameter of the point (default: 18)
  // @param color - color of the point (default: "black")
  draw(ctx, size = 18, color = "black") {
    const rad = size / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
    ctx.fill();
  }
}
