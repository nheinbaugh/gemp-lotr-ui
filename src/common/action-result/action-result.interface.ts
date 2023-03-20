export interface ActionResult<T> {
    success: boolean;
    result?: T;
    error?: string;
}