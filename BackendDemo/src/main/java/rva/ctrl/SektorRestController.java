package rva.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Sektor;
import rva.repository.SektorRepository;

@RestController
public class SektorRestController {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private SektorRepository sektorRepository;
	
	@GetMapping("sektor")
	public Collection<Sektor> getSektore(){
		return sektorRepository.findAll();
	}
	
	@GetMapping("sektor/{id}")
	public Sektor getSektor(@PathVariable("id") Integer id) {
		return sektorRepository.getById(id);
	}
	
	@GetMapping("sektorNaziv/{naziv}")
	public Collection<Sektor> getSektorNaziv(@PathVariable("naziv") String naziv){
		return sektorRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@PostMapping("sektor")
	public ResponseEntity<Sektor> insertSektor(@RequestBody Sektor sektor ){
		if(!sektorRepository.existsById(sektor.getId())) {
			sektorRepository.save(sektor);
			return new ResponseEntity<Sektor>(HttpStatus.OK);
		}
		return new ResponseEntity<Sektor>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("sektor")
	public ResponseEntity<Sektor> updateSektor(@RequestBody Sektor sektor){
		if(!sektorRepository.existsById(sektor.getId())) {
			return new ResponseEntity<Sektor>(HttpStatus.NO_CONTENT);
		}
			sektorRepository.save(sektor);
			return new ResponseEntity<Sektor>(HttpStatus.OK);
			
	}
	
	@Transactional
	@DeleteMapping("sektor/{id}")
	public ResponseEntity<Sektor> deleteSektor(@PathVariable("id") Integer id){
		if(!sektorRepository.existsById(id)) {
			return new ResponseEntity<Sektor>(HttpStatus.NO_CONTENT);
		}
		jdbcTemplate.execute("delete from radnik where sektor = " + id);
		sektorRepository.deleteById(id);
		if(id== -100)
			jdbcTemplate.execute(
					"Insert into \"preduzece\"(\"id\", \"naziv\", \"oznaka\",\"preduzece\") "
					+ "values(-100,'test naziv', 'test ozn','test preduzece')"
							);
	
		return new ResponseEntity<Sektor>(HttpStatus.OK);
		
	}
	
	
}
