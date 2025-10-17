/**
 * New Feature Implementation
 * Created in development branch
 */

class FeatureManager {
    constructor() {
        this.features = [];
        console.log('FeatureManager initialized');
    }

    addFeature(name, description) {
        const feature = {
            id: Date.now(),
            name: name,
            description: description,
            created: new Date().toISOString()
        };
        this.features.push(feature);
        console.log(`Feature added: ${name}`);
        return feature;
    }

    listFeatures() {
        return this.features;
    }
}

// Export for use
module.exports = FeatureManager;