package ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Preduzece;
import rva.repository.PreduzeceRepository;

@CrossOrigin
@RestController
public class PreduzeceRestController {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private PreduzeceRepository preduzeceRepository;
	
	@GetMapping("preduzece")
	public Collection<Preduzece> getPreduzeca(){
		return preduzeceRepository.findAll();
	}
	
	@GetMapping("preduzece/{id}")
	public Preduzece getPreduzece(@PathVariable("id") Integer id) {
		return preduzeceRepository.getById(id);
	}
	
	@GetMapping("preduzeceNaziv/{naziv}")
	public Collection<Preduzece> getPreduzeceNaziv(@PathVariable("naziv") String naziv){
		return preduzeceRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("preduzece")
	public ResponseEntity<Preduzece> insertPreduzece(@RequestBody Preduzece preduzece){
		if(!preduzeceRepository.existsById(preduzece.getId())) {
			preduzeceRepository.save(preduzece);
			return new ResponseEntity<Preduzece>(HttpStatus.OK);
		}
		return new ResponseEntity<Preduzece>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("preduzece")
	public ResponseEntity<Preduzece> updatePreduzece(@RequestBody Preduzece preduzece){
		if(!preduzeceRepository.existsById(preduzece.getId())) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
			preduzeceRepository.save(preduzece);
			return new ResponseEntity<Preduzece>(HttpStatus.OK);
			
	}
	
	@DeleteMapping("preduzece/{id}")
	public ResponseEntity<Preduzece> deletePreduzece(@PathVariable("id") Integer id){
		if(!preduzeceRepository.existsById(id)) {
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		}
		preduzeceRepository.deleteById(id);
		if(id== -100)
			jdbcTemplate.execute(
					"Insert into \"preduzece\"(\"id\", \"naziv\", \"pib\",\"sediste\",\"opis\") "
					+ "values(-100,'test naziv', 'test pib','test sediste','test opis')"
							);
	
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
		
	}
	
}
