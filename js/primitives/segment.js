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
  // Returns true if both segments have the same endpoints (in any order)
  equals(seg) {
    return (
      (this.p1.equals(seg.p1) && this.p2.equals(seg.p2)) ||
      (this.p1.equals(seg.p2) && this.p2.equals(seg.p1))
    );
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

  // === STATIC METHODS ===
  // Creates a random segment between two points in the graph
  // @param graph - the graph containing the points
  // @returns a new segment or null if not enough points
  static createRandom(graph) {
    if (graph.points.length < 2) {
      console.log("Need at least 2 points to create a segment");
      return null;
    }

    // Get two different random points
    const index1 = Math.floor(Math.random() * graph.points.length);
    let index2;
    do {
      index2 = Math.floor(Math.random() * graph.points.length);
    } while (index2 === index1);

    const point1 = graph.points[index1];
    const point2 = graph.points[index2];

    return new Segment(point1, point2);
  }

  // === SEGMENT ADDITION METHOD ===
  // Adds a random segment to the graph and redraws the canvas
  // @param graph - the graph to add the segment to
  // @param ctx - the canvas context for redrawing
  static addRandomSegment(graph, ctx) {
    console.log("addRandomSegment called");
    const newSegment = Segment.createRandom(graph);

    if (newSegment) {
      const success = graph.tryAddSegment(newSegment);
      console.log("Segment addition success:", success);

      if (success) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        graph.draw(ctx);
        console.log("Canvas redrawn");
      }
    }
  }
}
