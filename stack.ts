import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const pregunta = (pregunta: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta: string) => {
      resolve(respuesta);
    });
  });
};

class Stack<T> {
  private items: { [key: number]: T } = {};
  private top: number = 0;

  push(data: T): void {
    this.top++;
    this.items[this.top] = data;
  }

  pop(): T | undefined {
    let deletedData: T | undefined;
    if (this.top !== 0) {
      deletedData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deletedData;
    }
  }

  getSize(): number {
    return this.top;
  }

  isEmpty(): boolean {
    return this.top === 0;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.top];
  }

  print(): string {
    let result = '';
    for (let i = this.top; i > 0; i--) {
      result += this.items[i] + ' ';
    }
    return result.trim();
  }
}

const stack = new Stack<string>();

const main = async (): Promise<void> => {
  try {
    const cosa1 = await pregunta("Ingresa lo que quieras al stack. \n");
    const cosa2 = await pregunta("Ingresa lo que quieras al stack. \n");
    const cosa3 = await pregunta("Ingresa lo que quieras al stack. \n");
    const cosa4 = await pregunta("Ingresa lo que quieras al stack. \n");
    const cosa5 = await pregunta("Ingresa lo que quieras al stack. \n");

    stack.push(cosa1);
    stack.push(cosa2);
    stack.push(cosa3);
    stack.push(cosa4);
    stack.push(cosa5);

    console.log("El stack se ve así: " + stack.print());

    let opc: number;
    do {
      const op = await pregunta("¿Qué quieres hacer ahora?:\n1.Ver el siguiente objeto a sacar.\n2.Sacar un objeto\n3.Ver el contenido del stack.\n4.Añadir un nuevo objeto al stack\n0.Salir\n");
      opc = Number(op);

      switch (opc) {
        case 1:
          console.log("El siguiente objeto es: " + stack.peek());
          break;
        case 2:
          const a = stack.pop();
          console.log("El stack ahora se ve así: " + stack.print() + "\nEl objeto que sacaste fue: " + a);
          break;
        case 3:
          console.log("El contenido del stack es: " + stack.print());
          break;
        case 4:
          const cosa6 = await pregunta("Ingresa lo que quieras al stack. \n");
          stack.push(cosa6);
          break;
        case 0:
          rl.close();
          return;
      }
    } while (opc !== 0);

    rl.close();

  } catch (error) {
    console.error("Error", error);
    rl.close();
  }
}

main();
