// === GRAPH CLASS ===
// Represents a graph data structure with points and segments
class Graph {
  // === CONSTRUCTOR ===
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  // === POINT MANAGEMENT ===
  addPoint(point) {
    this.points.push(point);
  }

  containsPoint(point) {
    return this.points.find((p) => p.equals(point));
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }

  removePoint(point) {
    const segments = this.getSegmentsWithPoint(point);
    for (const seg of segments) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  // === SEGMENT MANAGEMENT ===
  addSegment(seg) {
    this.segments.push(seg);
  }

  containsSegment(seg) {
    return this.segments.find((s) => s.equals(seg));
  }

  tryAddSegment(seg) {
    // Check if the segment already exists
    if (this.containsSegment(seg)) {
      return false;
    }

    // Check if the segment connects the same point
    if (seg.p1.equals(seg.p2)) {
      return false;
    }

    // If all checks pass, add the segment
    this.addSegment(seg);
    return true;
  }

  removeSegment(seg) {
    this.segments.splice(this.segments.indexOf(seg), 1);
  }

  // === UTILITY METHODS ===
  getSegmentsWithPoint(point) {
    const segments = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segments.push(seg);
      }
    }
    return segments;
  }

  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }

  // === RENDERING ===
  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}
