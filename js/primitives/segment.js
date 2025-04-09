// === SEGMENT CLASS ===
// Represents a line segment between two points in 2D space
class Segment {
  // === CONSTRUCTOR ===
  // Creates a new segment between two points
  // @param p1 - first endpoint
  // @param p2 - second endpoint
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  // === COMPARISON METHOD ===
  // Checks if this segment is equal to another segment
  // Returns true if both segments have the same endpoints
  equals(seg) {
    return this.includes(seg.p1) && this.includes(seg.p2);
  }

  // === POINT CHECK METHOD ===
  // Checks if a point is one of the segment's endpoints
  // @param point - point to check
  // @returns true if the point is either p1 or p2
  includes(point) {
    return this.p1.equals(point) || this.p2.equals(point);
  }

  // === DRAWING METHOD ===
  // Draws the segment on the canvas
  // @param ctx - canvas context
  // @param width - line width (default: 2)
  // @param color - line color (default: "black")
  draw(ctx, width = 2, color = "black") {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
