import React from "react";
function App() {
  return (
    <div className="container ">
      <form> 
          <div class="mb-3">
          <label for="nom" class="form-label">Nom</label><br/>
            <input type="text" class="form-control-md" id="nom" aria-describedby=""/><br/>

            <label for="prenom" class="form-label">Prénom</label><br/>
            <input type="text" class="form-control-md" id="prenom" aria-describedby=""/><br/>

            <label for="email" class="form-label">Email address</label><br/>
            <input type="email" class="form-control-md" id="email" aria-describedby="emailHelp"/><br/>

            <label for="date-naissance" class="form-label">Date de naissance</label><br/>
            <select class="form-select-sm" aria-label="">
              <option selected>jour</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="1">4</option>
              <option value="2">5</option>
              <option value="3">6</option>
              <option value="1">7</option>
              <option value="2">8</option>
              <option value="3">8</option>
              <option value="1">10</option>
              <option value="2">11</option>
              <option value="3">12</option>
              <option value="1">13</option>
              <option value="2">14</option>
              <option value="3">15</option>
              <option value="1">16</option>
              <option value="2">17</option>
              <option value="3">18</option>
              <option value="1">19</option>
              <option value="2">20</option>
              <option value="3">21</option>
              <option value="1">22</option>
              <option value="2">23</option>
              <option value="3">24</option>
              <option value="1">25</option>
              <option value="2">26</option>
              <option value="3">27</option>
              <option value="1">28</option>
              <option value="2">29</option>
              <option value="3">30</option>
              <option value="1">31</option>              
            </select>

            <select class="form-select-sm" aria-label="Default select example">
              <option selected>mois</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">8</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
                
            </select>

            <select class="form-select-sm" aria-label="Default select example">
              <option selected>années</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>
            <br/>
          </div>
          <button type="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
