import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logs: string[] = [];

  log(message: string): void {
    const entry = `[${new Date().toLocaleTimeString()}] INFO: ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  error(message: string): void {
    const entry = `[${new Date().toLocaleTimeString()}] ERROR: ${message}`;
    this.logs.push(entry);
    console.error(entry);
  }

  getLogs(): string[] {
    return this.logs;
  }

  clearLogs(): void {
    this.logs = [];
  }
}
