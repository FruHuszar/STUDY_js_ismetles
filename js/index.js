import ViragController from "./CONTROLLER/ViragController.js";

new ViragController();

/**
 * 
 * 1. kell egy gomb a virág osztalyban (Kész, a neve: megnyit az osztálya open)
 * 2. a virag osztalyban kell egy esemenykezelo a gombra kattintast kezeli és kivált egy saját eseményt: megnyit
 * 3. a saját eseményre feliratkozunk a kontrollerben. Itt kell kezelni hogy lekerjuk azt az objektumot alistabol mai ehhze a vraghoz tartozik.
 * 4. megjelenitjuk a modalban ezt az egy virágot, és megnyílik a modal
 */

/**
 *          legyen egy gomb a viragteljesben amire ha katitntunk akkor a virag bekerul a kosárba -> esemeny kosarba
 * a viragcontrollerbe feliratkozik a kosarba esemenyre
 * a modellben kell kosarlista ahova bekerul a kivalasztott adat
 * modellbe kell egy kosarba tagfuggveny
 *          modellbe egy getkosar
 * a controller lekeri a modelltol a kosar tartalmat és példányosítja a kosar divbe a kosár tartlmat (hasznald a viragok osztalt)
 */